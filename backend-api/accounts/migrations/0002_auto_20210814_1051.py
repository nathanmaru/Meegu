# Generated by Django 3.2.6 on 2021-08-14 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='gender',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
