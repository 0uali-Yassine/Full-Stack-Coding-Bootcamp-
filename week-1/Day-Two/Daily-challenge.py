#Challenge 2

word = input('Enter a word: ')
indexes_letter = {}
for i in range(len(word)):
    if word[i] in indexes_letter:
        indexes_letter[word[i]].append(i)
    else:
        indexes_letter[word[i]] = [i]
   

print(indexes_letter)