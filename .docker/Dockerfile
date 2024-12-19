FROM php:8.1-apache

COPY .docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY .docker/apache/start-apache /usr/local/bin/start-apache

RUN apt-get update
RUN apt-get -y install git zip unzip
RUN apt-get -y install sudo nano curl
RUN apt-get -y install libicu-dev libbz2-dev libpng-dev libjpeg-dev libpq-dev libmcrypt-dev libreadline-dev libfreetype6-dev g++
RUN apt-get -y install nodejs npm
RUN apt-get -y install libzip-dev zip unzip

RUN a2enmod rewrite headers

RUN docker-php-ext-install mysqli pdo_mysql pdo pdo_pgsql
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd
RUN docker-php-ext-install exif
RUN docker-php-ext-install zip

RUN chmod +x /usr/local/bin/start-apache
RUN php -r 'print_r(gd_info());'
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
ENV COMPOSER_ALLOW_SUPERUSER=1

# Copy application source
COPY . /var/www/
RUN chown -R www-data:www-data /var/www
RUN /usr/local/bin/composer update -d /var/www/ --lock
RUN /usr/local/bin/composer install -d /var/www/ --prefer-dist
RUN npm install

CMD ["start-apache"]

