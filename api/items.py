
from flask import Flask, Blueprint, jsonify, request
import json

Items = Blueprint("Items", __name__)

class items:
  stock = dict()
  stockList = list()

  @classmethod
  def loadData(cls, filename):
    file = open(filename)
    cls.stockList = json.load(file)
    file.close()
    for data in cls.stockList:
      cls.stock[data["id"]] = data

  def __init__(self, id, name):
    self.id = id
    self.name = name
	    
  def get(self):
  	return {"id": self.id, "name": self.name}

@Items.route("/api/getallitems", methods=["GET"])
def getItems():
  print("get call")
  return jsonify(items.stockList)

@Items.route("/api/getitems", methods=["POST"])
def requestItems():
  req = request.get_json()
  res = list()
  for id in req["ids"]:
    if (id in items.stock.keys()):
      res.append(items.stock[id])
  return jsonify(res)
