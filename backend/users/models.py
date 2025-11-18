from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

# ✅ Custom User Manager
class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None, is_agent=False, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, is_agent=is_agent, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_agent', False)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')
        return self.create_user(username, email, password, **extra_fields)


# ✅ Custom User
class CustomUser(AbstractUser):
    is_agent = models.BooleanField(default=False)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)

    objects = CustomUserManager()  # attach custom manager

    def __str__(self):
        return self.username
