from flask import Flask
import os

from server.main import main_bp
from server.convert import convert_bp
from server.misc import misc_bp
from .models import db
from .commands import create_tables

def create_app(config_file="settings.py"):
    app = Flask(__name__, static_folder=os.path.abspath(
        "client/build"), template_folder=os.path.abspath('client'))
    
    app.config.from_pyfile(config_file)

    #init the db
    db.init_app(app)

    # register api routes
    app.register_blueprint(main_bp)
    app.register_blueprint(convert_bp)
    app.register_blueprint(misc_bp)
    
    # register click command to create tables
    app.cli.add_command(create_tables)

    return app