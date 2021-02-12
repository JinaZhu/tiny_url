import hashlib
import uuid

def generate_unqiue_path_part(url, urlTable):
    unqiue_id = uuid.uuid4()
    # combining url with a unique id to ensure same url will get their own unique path
    unqiue_url = url + str(unqiue_id)
    encode_data = hashlib.sha1(unqiue_url.encode())
    encode_url = encode_data.hexdigest()
    unqiue_path = encode_url[:6]

    # check to ensure the generated path isn't in the db
    exist = urlTable.query.filter_by(converted_url=unqiue_path).scalar()
    if exist != None:
        generate_unqiue_path_part(url)
    else:
        return(unqiue_path)



