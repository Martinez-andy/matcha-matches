from django.shortcuts import render

# Create your views here.

# Handles the home page for matcha matches
def index(request):
    return render(request, "matcha_matches/index.html")


# Redirects the user to the normal tic-tac-toe application
def ticTacToe(request):
    return


# Redirects the user to the "twisted" tic-tac-toe application, AKA tic-tac-tea
def ticTacTea(request):
    return


# Redirects the user to the normal checkers application
def checkers(request):
    return
    
    
# Redirects the user to the "twisted checkers" application, AKA Checkers chai
def chai(requset):
    return


# Redirects user to the 4-in-a-row application
def connect(request):
    return


# Redirects user to the Coco Connect application
def cocoConnect(request):
    return