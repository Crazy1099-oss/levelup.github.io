const btnLevel2 = document.getElementById('bnt_level2');
const btnLevel4 = document.getElementById('bnt_level4');
const btnLevel7 = document.getElementById('bnt_level7');

const hp_player_span = document.getElementById('hp_player_span');
const mp_player_span = document.getElementById('mp_player_span');
const points_player_span = document.getElementById('points_player_span');

const btn_by_hp = document.getElementById("btn_by_hp");
const btn_by_mp = document.getElementById("btn_by_mp");

hero = () => {
    let hp = 100;
    let mp = 100;
    let points = 0;

    console.log("HP:", hp)
    console.log("MP:", mp)
    console.log("Points:", points)

    attak = () => {
        btnLevel2.addEventListener('click', () => {
            if (mp < 50) {
                alert('вы не можете напасть на это существо! Причина: нету маны')
            } else {
                hp = hp - 10;
                mp = mp - 50;
                points = points + 60;
                console.log("HP:", hp, "MP:", mp, "Points:", points);

                hp_player_span.innerHTML = `${hp}`
                mp_player_span.innerHTML = `${mp}`
                points_player_span.innerHTML = `${points}`

                if (hp <= 0) {
                    document.getElementById("game_end_block_restart").style.display = 'flex';
                }

                document.getElementById("enemy_box").classList.add('animatiom_attak');
                setTimeout(() => {
                    document.getElementById("enemy_box").classList.remove('animatiom_attak');
                }, 200);
            }
        })

        btnLevel4.addEventListener('click', () => {
            if (mp < 10) {
                alert('вы не можете напасть на это существо! Причина: нету маны')
            } else {
                hp = hp - 25;
                mp = mp - 10;
                points = points + 35;
                console.log("HP:", hp, "MP:", mp, "Points:", points);

                hp_player_span.innerHTML = `${hp}`
                mp_player_span.innerHTML = `${mp}`
                points_player_span.innerHTML = `${points}`

                if (hp <= 0) {
                    document.getElementById("game_end_block_restart").style.display = 'flex';
                }

                document.getElementById("enemy_box2").classList.add('animatiom_attak');
                setTimeout(() => {
                    document.getElementById("enemy_box2").classList.remove('animatiom_attak');
                }, 200);
            }
        })

        btnLevel7.addEventListener('click', () => {
            if (mp < 25) {
                alert('вы не можете напасть на это существо! Причина: нету маны')
            } else {
                hp = hp - 50;
                mp = mp - 25;
                points = points + 75;
                console.log("HP:", hp, "MP:", mp, "Points:", points);

                hp_player_span.innerHTML = `${hp}`
                mp_player_span.innerHTML = `${mp}`
                points_player_span.innerHTML = `${points}`

                if (hp <= 0) {
                    document.getElementById("game_end_block_restart").style.display = 'flex';
                }

                document.getElementById("enemy_box3").classList.add('animatiom_attak');
                setTimeout(() => {
                    document.getElementById("enemy_box3").classList.remove('animatiom_attak');
                }, 200);
            }
        })
    }



    eat = () => {
        btn_by_hp.addEventListener('click', () => {
            if (points < 25) {
                alert("У вас нету очков для покупки")
            } else {
                hp = hp + 50;
                points = points - 25;
                console.log("HP:", hp, "MP:", mp, "Points:", points);

                hp_player_span.innerHTML = `${hp}`
                mp_player_span.innerHTML = `${mp}`
                points_player_span.innerHTML = `${points}`

                document.getElementById("byEat").classList.add('animatiom_by');
                setTimeout(() => {
                    document.getElementById("byEat").classList.remove('animatiom_by');
                }, 200);
            }

        })

        btn_by_mp.addEventListener('click', () => {
            if (points < 25) {
                alert("У вас нету очков для покупки")
            } else {
                mp = mp + 50;
                points = points - 25;
                console.log("HP:", hp, "MP:", mp, "Points:", points);

                hp_player_span.innerHTML = `${hp}`
                mp_player_span.innerHTML = `${mp}`
                points_player_span.innerHTML = `${points}`

                document.getElementById("byEat2").classList.add('animatiom_by');
                setTimeout(() => {
                    document.getElementById("byEat2").classList.remove('animatiom_by');
                }, 200);
            }

        })
    }
}

function restart() {
    document.getElementById("btn_restert").addEventListener('click', () => {
        window.location.reload();
    })
}



hero();
attak();
eat();
restart();