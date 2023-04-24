from flask_restful import Api

from flaskapp.main import create_app
from flaskapp.resources import Expansions

app = create_app()
api = Api(app)
api.add_resource(Expansions.ExpansionAPI, '/api/expansions')

if __name__ == '__main__':
    app.run(debug=True)
