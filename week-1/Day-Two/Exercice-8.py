# exercice 8 
# Star Wars Quiz

data = [{
    "question": "What is Baby Yoda's real name?",
    "answer": "Grogu"
}, {
    "question": "Where did Obi-Wan take Luke after his birth?",
    "answer": "Tatooine"
}, {
    "question": "What year did the first Star Wars movie come out?",
    "answer": "1977"
}, {
    "question": "Who built C-3PO?",
    "answer": "Anakin Skywalker"
}, {
    "question": "Anakin Skywalker grew up to be who?",
    "answer": "Darth Vader"
}, {
    "question": "What species is Chewbacca?",
    "answer": "Wookiee"
}]



wrong_answers = []
number_of_correct = 0
number_of_incorrect = 0

for question in range(len(data)):
    print(question)
    res = input(f'Question : {data[question]["question"]}')
    if data[question]["answer"] == res:
        number_of_correct += 1
    else:
        number_of_incorrect += 1
        wrong_answers.append(data[question])

print('number of correct answers : ', number_of_correct)

print('number of incorrect answers : ', number_of_incorrect)
print('wrong answers : ', wrong_answers)

