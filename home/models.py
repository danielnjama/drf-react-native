from django.db import models

# Create your models here.
genderinfo = (
    ('Male','Male'),
    ('Female','Female'),
    ('Other','Other')
)

class userinformation(models.Model):
    first_name = models.CharField(max_length=50)
    gender = models.CharField(max_length=20,choices=genderinfo)
    age = models.PositiveIntegerField()
    monthly_income = models.PositiveIntegerField()
    house_rent = models.PositiveIntegerField()
    own_a_car = models.BooleanField(default=False)


    def __str__(self):
        return self.first_name
