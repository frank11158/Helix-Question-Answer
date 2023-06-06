from django.db import models


class Question(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    # asked_by = models.ForeignKey('auth.User', related_name='questions', on_delete=models.CASCADE)
    asked_by = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
