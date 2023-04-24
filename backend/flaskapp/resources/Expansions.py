from flask_restful import Resource
from flaskapp.main.extensions import db, ma
from sqlalchemy.orm.exc import NoResultFound

class Expansion(db.Model):
    __tablename__ = "expansions"
    _id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    type = db.Column(db.Integer)

    def __repr__(self):
        return f"{self._id} - {self.type} '{self.name}'"

class ExpansionSchema(ma.Schema):
    class Meta:
        fields = ("_id", "name", "type")
        model = Expansion

class ExpansionAPI(Resource):
    expansion_schema = ExpansionSchema()
    expansions_schema = ExpansionSchema(many=True)

    def get(self, id=None):
        if not id:
            return self._get_all_expansions(), 200
        try:
            return self._get_expansion_by_id(id), 200
        except NoResultFound:
            abort(404, "Expansion not found")

    def _get_all_expansions(self):
        expansions = Expansion.query.all()
        return self.expansions_schema.dump(expansions)

    def _get_expansion_by_id(self, id):
        temp = Expansion.query.filter_by(_id=id).first()
        temp_json = self.expansion_schema.dump(temp)

        if not temp_json:
            raise NoResultFound()
        return temp_json
