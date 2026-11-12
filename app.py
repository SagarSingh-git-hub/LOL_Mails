from flask import Flask, send_file, send_from_directory, request, jsonify
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)

# Configuration
API_HOST = os.getenv("RAPIDAPI_HOST", "privatix-temp-mail-v1.p.rapidapi.com")
API_KEY = os.getenv("RAPIDAPI_KEY")
API_BASE_URL = f"https://{API_HOST}/request"

if not API_KEY:
    print("Warning: RAPIDAPI_KEY not set in environment variables.")

@app.route('/')
def index():
    return send_file(os.path.join(BASE_DIR, 'Index.html'))

@app.route('/request/<path:endpoint>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def proxy_request(endpoint):
    target_url = f"{API_BASE_URL}/{endpoint}"
    
    # Allow client to supply key via header, fallback to server environment key
    client_key = request.headers.get('x-rapidapi-key')
    active_key = client_key if client_key else API_KEY

    headers = {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': active_key
    }
    
    try:
        # Forward the request to RapidAPI
        resp = requests.request(
            method=request.method,
            url=target_url,
            headers=headers,
            params=request.args,
            json=request.get_json(silent=True)
        )
        
        # Return the response from RapidAPI
        # Filter headers to avoid transfer-encoding issues with Flask
        excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
        response_headers = [(name, value) for (name, value) in resp.headers.items()
                            if name.lower() not in excluded_headers]
        
        return (resp.content, resp.status_code, response_headers)
        
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

@app.route('/<path:filename>')
def serve_static(filename):
    file_path = os.path.join(BASE_DIR, filename)
    if os.path.isfile(file_path):
        return send_from_directory(BASE_DIR, filename)
    return jsonify({'error': f'File {filename} not found'}), 404

if __name__ == '__main__':
    print(f"Starting server... API Key present: {bool(API_KEY)}")
    app.run(debug=True, port=5500)
