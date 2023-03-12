-- AlterTable
ALTER TABLE "advertising" 
RENAME COLUMN "image" TO "imageUrl";
ALTER TABLE "advertising" 
RENAME COLUMN "image_name" TO "imageName";

-- AlterTable
ALTER TABLE "post"
RENAME COLUMN "image_name" TO "imageName";
ALTER TABLE "post"
RENAME COLUMN "image_url" TO "imageUrl";
