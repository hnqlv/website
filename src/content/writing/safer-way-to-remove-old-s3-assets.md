---
title: A safer way to remove old S3 assets
summary: Using AWS S3 lifecycle policies to automatically delete old assets.
date: 2024-07-18
tags: ["writing", "cloud", "s3"]
---
Ever had a close call with accidentally deleting important files? We did, and it taught us a valuable lesson about handling asset expiration.

After a scary incident where we almost lost all our recordings and ID photos due to a sneaky null value, we decided to avoid the risky `storage.ls` method.

So, how do we manage asset expiration without listing files? The answer is [AWS S3 lifecycle policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html).

Instead of manually listing and deleting objects, we now use a simple JSON policy:

```json
{
  "Rules": [
    {
      "ID": "AutoExpireBrowserHistory",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "tmp/browser-history"
      },
      "Expiration": {
        "Days": 30
      }
    }
  ]
}
```
This policy automatically deletes objects in the specified prefix after a set number of days. We update it daily via a cron job, allowing us to flexibly manage different asset types and expiration periods.

It's a safer, more efficient way to handle asset expiration. No more nail-biting moments wondering if we've accidentally deleted the wrong files!
