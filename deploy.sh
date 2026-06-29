#!/bin/bash

echo "🚀 Deploying AutomobileAZ..."

# Fix Git ownership warnings on VPS
git config --global --add safe.directory /var/www/clients/client1/web3/web/AutomobileAZ_Belgique_BK
git config --global --add safe.directory /var/www/clients/client1/web3/web/AutomobileAZ_Belgique_Front

cd /var/www/clients/client1/web3/web/AutomobileAZ_Belgique_BK

# Backend
echo "📦 Updating Laravel..."
git pull
composer install --optimize-autoloader --no-dev
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize:clear
php artisan storage:link --force

# Permissions
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# Frontend
echo "📦 Updating React..."
cd ../AutomobileAZ_Belgique_Front
git pull
npm install --legacy-peer-deps
npm run build:prod

# Copy to web root
cp -r build/* /var/www/clients/client1/web3/web/

# Ensure storage link exists in the web root pointing to the backend storage
if [ ! -L /var/www/clients/client1/web3/web/storage ]; then
    echo "🔗 Creating web root storage symlink..."
    ln -s /var/www/clients/client1/web3/web/AutomobileAZ_Belgique_BK/storage/app/public /var/www/clients/client1/web3/web/storage
fi

# Restart services
systemctl reload nginx
systemctl restart php8.4-fpm

echo "✅ Deployment complete!"
echo "🌐 Visit: http://automobileaz.be"
