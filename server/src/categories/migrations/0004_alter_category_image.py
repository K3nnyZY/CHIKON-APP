# Generated by Django 4.0 on 2024-06-04 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0003_alter_category_image_alter_category_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='image',
            field=models.ImageField(upload_to='categories/img', verbose_name='Imagen'),
        ),
    ]
