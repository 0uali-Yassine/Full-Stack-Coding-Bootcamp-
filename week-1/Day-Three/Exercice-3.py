# Exercise 3 : 
# Who’s the song producer?
#  __init__() method should have two arguments: self and lyrics (a list).


class  Song():

    def __init__(self,lyrics):
        self.lyrics = lyrics
    # sing_me_a_song that prints each element of lyrics on its own line.
    def sing_me_a_song(self):
         for line in self.lyrics:
            print(line)

stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()