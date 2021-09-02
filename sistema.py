import eel #eel mini-framework import
class system:
    eel.init('gui') #showing the path
    def __init__(self):
        super().__init__()

    @eel.expose()
    def classs():
        pass

    

eel.start('/pages/main/index.html')
