const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send(
        [
            {
                'id': 1,
                'imge': 'https://placeimg.com/64/64/any',
                'name': '테스트',
                'birthday': '980121',
                'gender': '여성',
                'job': '대학생',

            },
            {
                'id': 2,
                'imge': 'https://placeimg.com/64/64/any',
                'name': '테스트1',
                'birthday': '980121',
                'gender': '남성',
                'job': '대학생',

            },
            {
                'id': 3,
                'imge': 'https://placeimg.com/64/64/any',
                'name': '테스트2',
                'birthday': '980121',
                'gender': '여성',
                'job': '대학생',

            }
        ]

    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));