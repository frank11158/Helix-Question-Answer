# Generated by Django 4.0.2 on 2023-06-06 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='asked_by',
            field=models.TextField(),
        ),
    ]
