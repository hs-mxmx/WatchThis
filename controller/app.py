from flask import Flask, Response
from database.db import initialize_db
from database.operations import episodes_operations, movies_operations, \
    series_operations, seasons_operations, users_operations, medialist_operations

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://WatchThisUser:patrones123@watchthisdb-shard-00-00.gkixn.mongodb.net:27017,watchthisdb-shard-00-01.gkixn.mongodb.net:27017,watchthisdb-shard-00-02.gkixn.mongodb.net:27017/WatchthisDB?ssl=true&replicaSet=atlas-s035bc-shard-0&authSource=admin&retryWrites=true&w=majority'
}

initialize_db(app)


@app.route('/<route>')
def get_items(route):
    if route == 'episodes':
        item = episodes_operations.get_episodes()
    if route == 'movies':
        item = movies_operations.get_movies()
    if route == 'series':
        item = series_operations.get_series()
    if route == 'seasons':
        item = seasons_operations.get_seasons()
    if route == 'users':
        item = users_operations.get_users()
    if route == 'medias':
        item = medialist_operations.get_medias()
    return Response(item, mimetype="application/json", status=200)


@app.route('/<route>', methods=['POST'])
def add_item(route):
    if route == 'episodes':
        id, item = episodes_operations.add_episodes_body()
    if route == 'movies':
        id, item = movies_operations.add_movies_body()
    if route == 'series':
        id, item = series_operations.add_series_body()
    if route == 'seasons':
        id, item = seasons_operations.add_seasons_body()
    if route == 'users':
        id, item = users_operations.add_users_body()
    if route == 'medias':
        id, item = medialist_operations.add_medias_body()
    return {"Add": {'Item': str(item), 'id': str(id)}}, 200


@app.route('/<route>/<id>', methods=['PUT'])
def update_item(route, id):
    # Update items based on id
    if route == 'episodes':
        item = episodes_operations.update_episodes(id)
    if route == 'movies':
        item = movies_operations.update_movies(id)
    if route == 'series':
        item = series_operations.update_series(id)
    if route == 'seasons':
        item = seasons_operations.update_seasons(id)
    if route == 'users':
        item = users_operations.update_users(id)
    if route == 'medias':
        item = medialist_operations.update_medias(id)
    return {"Update": '{} was successfully updated!'.format(item)}, 200


@app.route('/<route>/<id>', methods=['DELETE'])
def delete_item(route, id):
    # Delete items based on id
    if route == 'episodes':
        item = episodes_operations.delete_episode(id)
    if route == 'movies':
        item = movies_operations.delete_movie(id)
    if route == 'series':
        item = series_operations.delete_serie(id)
    if route == 'seasons':
        item = seasons_operations.delete_seasons(id)
    if route == 'users':
        item = users_operations.delete_user(id)
    if route == 'medias':
        item = medialist_operations.delete_media(id)
    return {'Delete': '{} was successfully deleted!'.format(item)}, 200


app.run()
