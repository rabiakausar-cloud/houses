from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth import get_user_model
User = get_user_model()

class Property(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True ,null=True, related_name="properties")
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='property_images/', blank=True, null=True)
    location = models.CharField(max_length=200)
    room=models.CharField(max_length=50)    
    Bath=models.CharField(max_length=50)
    area=models.CharField(max_length=50)
    parkign=models.BooleanField(default=False) 
    ac=models.BooleanField(default=False) 
    parkign=models.BooleanField(default=False)  
    outdoor=models.BooleanField(default=False)
    price_sqft=models.CharField( max_length=150 ,default="")
    year_built=models.DateField( auto_now_add=False,default="2022")
    Listed=models.BooleanField(default=False)
 
 
    


    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
from django.db import models

