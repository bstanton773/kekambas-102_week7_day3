import time

def first():
    time.sleep(3)
    print('First')

def second():
    print('Second')


first()
second()


def download_song(song_name):
    print(f"Downloading {song_name}...")
    time.sleep(3)
    return {'title': song_name, 'artist': 'Chief Keef'}


def play_song(song_name):
    song = download_song(song_name)
    print(f"{song['title']} by {song['artist']} is playing...")


play_song('Love Sosa')
