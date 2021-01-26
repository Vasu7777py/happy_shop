
from flask import Flask, Blueprint, jsonify, request

Items = Blueprint("Items", __name__)

class items:
    stock = list()

    def __init__(self, id, name):
        self.id = id
        self.name = name
        
    def get(self):
        return {"id": self.id, "name": self.name}

@Items.route("/api/getitems", methods=["GET"])
def getItems():
    print("get call")
    itemstock = list()
    for item in items.stock:
        itemstock.append(item.get())
    return jsonify(itemstock)

items.stock.append(items("7777", "NVIDA-3090"))
items.stock.append(items("7770", "AMD-threadrepper"))