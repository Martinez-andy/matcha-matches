from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("tic-tac-toe", views.ticTacToe, name="tic-tac-toe"),
    path("tic-tac-tea", views.ticTacTea, name="tic-tac-tea"),
    path("checkers", views.checkers, name="checkers"),
    path("checkers-chai", views.chai, name="checkers-chai"),
    path("4-in-a-row", views.connect, name="connect"),
    path("coco-connect", views.cocoConnect, name="coco-connect"),
]
