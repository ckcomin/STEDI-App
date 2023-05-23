echo "logging in"
curl -v -d "@login.json" -H "content-Type:application/json" -X POST https://dev.stedi.me/login