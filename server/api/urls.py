

from django.urls import path
from .views import Login,Signup,VerifyOTP,GetRoomDetails,TurnServers,UserStatus,CheckJoinRoomStatus
urlpatterns = [
    path('Login/', Login.as_view()),
    path('Signup/', Signup.as_view()),
    path('VerifyOTP/', VerifyOTP.as_view()),
    path('GetRoomDetails/',GetRoomDetails.as_view()),
    path('TurnServers/',TurnServers.as_view()),
    path('UserStatus/',UserStatus.as_view()),
    path('CheckJoinRoomStatus/',CheckJoinRoomStatus.as_view()),
]
