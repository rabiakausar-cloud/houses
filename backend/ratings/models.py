from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class AgentRating(models.Model):
    agent = models.ForeignKey(User, on_delete=models.CASCADE, related_name="agent_ratings")
    rated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="given_ratings")
    rating = models.IntegerField()  # 1–5 stars
    review = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('agent', 'rated_by')  # user can rate agent only once

    def __str__(self):
        return f"{self.rated_by} rated {self.agent} ({self.rating})"
