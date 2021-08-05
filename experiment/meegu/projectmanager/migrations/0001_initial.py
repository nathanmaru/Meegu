# Generated by Django 3.2.4 on 2021-07-09 01:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=225)),
                ('biography', models.TextField()),
                ('date_of_birth', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=400)),
                ('publisher', models.CharField(max_length=400)),
                ('release_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='ThroughModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('external_url', models.TextField()),
                ('extra', models.BooleanField()),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='author_books', to='projectmanager.author')),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='book_authors', to='projectmanager.book')),
            ],
        ),
        migrations.AddField(
            model_name='author',
            name='books',
            field=models.ManyToManyField(blank=True, related_name='authors', through='projectmanager.ThroughModel', to='projectmanager.Book'),
        ),
    ]