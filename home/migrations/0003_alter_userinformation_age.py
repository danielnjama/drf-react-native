# Generated by Django 4.2.7 on 2023-11-07 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_remove_userinformation_date_of_birth_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinformation',
            name='age',
            field=models.PositiveIntegerField(),
        ),
    ]