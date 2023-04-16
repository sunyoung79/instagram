document.addEventListener("DOMContentLoaded",
    function(e){
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )

        let profileEditButton = document.querySelector("#profile-infobutton")
        let userInfo = document.querySelector("#userInfo")
        let summery = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false

        profileEditButton.addEventListener("click",
            function(e) {
                if(changing) {
                    let _userInfo = userInfo.querySelector("input").value
                    let _summery = summery.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo
                    summery.innerHTML = _summery

                    if (_profileDetail.startsWith("http")){
                        _profileDetail = "<a href="+ _profileDetail +">" + _profileDetail + "</a>"
                    }

                    profileDetail.innerHTML = _profileDetail

                    e.target.textContent = "프로필 편집"
                    changing = false
                
                } else{
                    let _userInfo = userInfo.textContent
                    let _summery = summery.textContent
                    let _profileDetail = profileDetail.textContent

                    userInfo.innerHTML = "<input value=" + _summery + "></input>"
                    summery.innerHTML = "<input value=" + _summery +"></input>"
                    profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }
            }
        )
        
        let profile_pic = document.querySelector("#profile_pic.circle_pic")
        profile_pic.addEventListener("mouseover",
            function(e){
                e.target.style.filter = "grayscale(50%)"
            }
        )
        
        profile_pic.addEventListener("mouseleave",
            function(e){
                e.target.style.filter = "grayscale(0%)"

            }
        )

        profile_pic.addEventListener("click",
            function(e){
                profile_pic.setAttribute("src", prompt("이미지 url을 입력해 주세요!"))
            }
        )
    }    
)