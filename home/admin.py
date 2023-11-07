from django.contrib import admin
from . models import userinformation

class UserinfoAdmin(admin.ModelAdmin):
    list_display = ['first_name','gender','age','monthly_income','house_rent','own_a_car']
    list_filter = ['gender','own_a_car']

admin.site.register(userinformation,UserinfoAdmin)

# Register your models here.
