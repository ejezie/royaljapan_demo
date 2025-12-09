from django.core.management.base import BaseCommand
from royal.api.models import User, Product
from random import randint


class Command(BaseCommand):
    help = "Seed dummy products for testing"

    def handle(self, *args, **options):
        # Create or get a default user for products
        default_user, created = User.objects.get_or_create(
            email="demo@royaljapan.com",
            defaults={
                "username": "デモユーザー",
            }
        )
        if created:
            default_user.set_password("demo123")
            default_user.save()
            self.stdout.write(self.style.SUCCESS(f'Created default user: {default_user.email}'))
        else:
            self.stdout.write(self.style.SUCCESS(f'Using existing user: {default_user.email}'))

        # Clear existing products for this user (optional - comment out if you want to keep existing)
        # Product.objects.filter(seller=default_user).delete()

        # Dummy products data with external image URLs
        products_data = [
            {
                "title": "プレミアム健康サプリメント",
                "package": "30日分",
                "description": "高品質な原材料を使用した健康サプリメントです。毎日の健康維持にお役立てください。",
                "price_origin": 5000,
                "price_sell": 3980,
                "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop",
                "image1": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop",
                "image2": "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop",
                "image3": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&h=500&fit=crop",
            },
            {
                "title": "天然成分配合 美容クリーム",
                "package": "50ml",
                "description": "厳選された天然成分を配合した美容クリーム。お肌をやさしくケアします。",
                "price_origin": 8000,
                "price_sell": 5980,
                "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
                "image1": "https://images.unsplash.com/photo-1556228841-7a0e0b3b8b2e?w=500&h=500&fit=crop",
                "image2": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
                "image3": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
            },
            {
                "title": "オーガニック ハーブティー",
                "package": "20袋入り",
                "description": "無農薬栽培のハーブを使用したリラックスティー。心と体をリフレッシュします。",
                "price_origin": 3000,
                "price_sell": 2480,
                "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=500&fit=crop",
                "image1": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
                "image2": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=500&fit=crop",
                "image3": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
            },
            {
                "title": "高級マッサージオイル",
                "package": "100ml",
                "description": "アロマ効果のある高級マッサージオイル。リラクゼーションとスキンケアを同時に。",
                "price_origin": 4500,
                "price_sell": 3480,
                "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
                "image1": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
                "image2": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
                "image3": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
            },
            {
                "title": "ビタミンC配合 スキンケアセット",
                "package": "3点セット",
                "description": "ビタミンCを配合したスキンケアセット。明るい肌を目指します。",
                "price_origin": 12000,
                "price_sell": 8980,
                "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
                "image1": "https://images.unsplash.com/photo-1556228841-7a0e0b3b8b2e?w=500&h=500&fit=crop",
                "image2": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
                "image3": "https://images.unsplash.com/photo-1556228841-7a0e0b3b8b2e?w=500&h=500&fit=crop",
            },
            {
                "title": "天然ハチミツ プレミアム",
                "package": "500g",
                "description": "純粋な天然ハチミツ。栄養価が高く、毎日の健康に最適です。",
                "price_origin": 3500,
                "price_sell": 2980,
                "image": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500&fit=crop",
                "image1": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500&fit=crop",
                "image2": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500&fit=crop",
                "image3": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500&fit=crop",
            },
            {
                "title": "オーガニック ココナッツオイル",
                "package": "250ml",
                "description": "コールドプレス製法のオーガニックココナッツオイル。料理やスキンケアに。",
                "price_origin": 2800,
                "price_sell": 2280,
                "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
                "image1": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
                "image2": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
                "image3": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
            },
            {
                "title": "プレミアム プロテイン",
                "package": "1kg",
                "description": "高品質なプロテインパウダー。トレーニング後のリカバリーに最適です。",
                "price_origin": 6000,
                "price_sell": 4980,
                "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&h=500&fit=crop",
                "image1": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop",
                "image2": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop",
                "image3": "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&h=500&fit=crop",
            },
        ]

        created_count = 0
        for product_data in products_data:
            # Check if product already exists (by title and seller)
            existing = Product.objects.filter(
                seller=default_user,
                title=product_data["title"]
            ).first()
            
            if not existing:
                Product.objects.create(
                    seller=default_user,
                    title=product_data["title"],
                    package=product_data["package"],
                    description=product_data["description"],
                    price_origin=product_data["price_origin"],
                    price_sell=product_data["price_sell"],
                    image=product_data["image"],
                    image1=product_data["image1"],
                    image2=product_data["image2"],
                    image3=product_data["image3"],
                    sold_count=randint(0, 50),  # Random sold count for demo
                )
                created_count += 1
                self.stdout.write(self.style.SUCCESS(f'Created product: {product_data["title"]}'))
            else:
                self.stdout.write(self.style.WARNING(f'Product already exists: {product_data["title"]}'))

        self.stdout.write(self.style.SUCCESS(f'\nSuccessfully created {created_count} products!'))
        self.stdout.write(self.style.SUCCESS(f'Total products for user: {Product.objects.filter(seller=default_user).count()}'))

