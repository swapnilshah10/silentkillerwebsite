from PIL import Image 

def compress_gif(input_path, output_path, optimize=True, frame_rate_factor=4/3):
    """
    Compress a GIF by adjusting the frame rate and optimizing colors.

    :param input_path: Path to the input GIF file.
    :param output_path: Path where the compressed GIF will be saved.
    :param optimize: Whether to optimize the GIF.
    :param frame_rate_factor: Factor by which to adjust the frame rate (e.g., 4/3 for 75%).
    """
    # Open the original GIF
    with Image.open(input_path) as img:
        # Create a list to hold the frames for the new GIF
        frames = []
        
        # Process all frames
        for frame_index in range(img.n_frames):
            img.seek(frame_index)
            # Convert the frame to RGBA (to handle transparency)
            frame = img.convert('RGBA')
            frames.append(frame)

        # Calculate the new duration
        new_duration = int(img.info['duration'] * frame_rate_factor)

        # Save the frames as a new GIF
        frames[0].save(
            output_path,
            save_all=True,
            append_images=frames[1:],
            optimize=optimize,
            loop=0,  # Loop forever
            duration=new_duration  # Adjust duration based on the frame rate factor
        )

# Example usage
input_gif = "./backgroundd.gif"   # Path to your input GIF file
output_gif = "./output.gif"  # Path to save the compressed GIF

compress_gif(input_gif, output_gif, optimize=True, frame_rate_factor=3/4)
