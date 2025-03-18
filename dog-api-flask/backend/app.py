from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/dog', methods=['GET'])
def get_dog_image():
    response = requests.get('https://dog.ceo/api/breeds/image/random')
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to fetch image'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
