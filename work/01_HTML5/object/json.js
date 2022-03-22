const student = {}; // 빈 객체를 만듦
        student.이름 = "윤인성";
        student.취미 = "악기";
        student.장래희망 = "생명공학자";

        delete student.장래희망;
        // 객체를 출력
        console.log(JSON.stringify(student, null, 2));
        console.log(student)