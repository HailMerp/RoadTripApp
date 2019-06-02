# Generated by Django 2.1.7 on 2019-02-16 03:09

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=70)),
                ('age', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(120), django.core.validators.MinValueValidator(1)])),
                ('active', models.BooleanField(default=False)),
            ],
        ),
    ]