from django.contrib import admin
from . models import userinformation

# your_app/admin.py
from django.http import HttpResponse
import csv

def export_as_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="exported_data.csv"'

    writer = csv.writer(response)
    writer.writerow(['first_name','gender','age','monthly_income','house_rent','own_a_car'])  # Replace with actual field names

    for obj in queryset:
        writer.writerow([obj.first_name, obj.gender, obj.age,obj.monthly_income,obj.house_rent,obj.own_a_car])  # Replace with actual fields

    return response

export_as_csv.short_description = "Export selected items as CSV"



class UserinfoAdmin(admin.ModelAdmin):
    list_display = ['first_name','gender','age','monthly_income','house_rent','own_a_car']
    list_filter = ['gender','own_a_car']
    actions = [export_as_csv]

admin.site.register(userinformation,UserinfoAdmin)

# Register your models here.
