import os
from PIL import Image, ImageEnhance, ImageOps
from rembg import remove

input_path = r"d:\portfolio\public\images\niraj-portrait.jpg"
output_cutout = r"d:\portfolio\public\images\niraj-cutout.png"
output_cutout_mono = r"d:\portfolio\public\images\niraj-cutout-monochrome.png"
output_framed_mono = r"d:\portfolio\public\images\niraj-portrait-monochrome.jpg"

print(f"Loading image from {input_path}...")
img = Image.open(input_path)

# 1. Background removal
print("Removing background with rembg...")
cutout = remove(img)
cutout.save(output_cutout, "PNG")
print(f"Saved transparent cutout to {output_cutout}")

# 2. Monochrome transparent cutout with enhanced contrast
print("Creating monochrome transparent cutout...")
# Split RGBA
r, g, b, a = cutout.split()
rgb_img = Image.merge('RGB', (r, g, b))
gray = ImageOps.grayscale(rgb_img)
enhancer = ImageEnhance.Contrast(gray)
gray_contrast = enhancer.enhance(1.25)
enhancer_bright = ImageEnhance.Brightness(gray_contrast)
gray_final = enhancer_bright.enhance(1.05)

mono_cutout = Image.merge('RGBA', (gray_final, gray_final, gray_final, a))
mono_cutout.save(output_cutout_mono, "PNG")
print(f"Saved monochrome cutout to {output_cutout_mono}")

# 3. Framed monochrome version for secondary / about section
print("Creating framed monochrome version...")
orig_gray = ImageOps.grayscale(img)
enhancer_orig = ImageEnhance.Contrast(orig_gray)
orig_contrast = enhancer_orig.enhance(1.3)
enhancer_orig_b = ImageEnhance.Brightness(orig_contrast)
orig_final = enhancer_orig_b.enhance(1.02)
orig_final.save(output_framed_mono, "JPEG", quality=95)
print(f"Saved framed monochrome to {output_framed_mono}")

print("All image processing completed successfully!")
