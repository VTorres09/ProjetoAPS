import requests

header = {'Content-type': 'application/json'}

r = requests.post("http://localhost:3002/", headers=header, json={
    "name": "Novo Prato",
    "descrição": "blabla",
    "ingredients": [
        {
            "nome": "Ingrediente 1",
            "calorias": 30
        }
        ,
        {
            "nome": "Ingrediente 2",
            "calorias": 40
        }
    ]
})

print(r.content)