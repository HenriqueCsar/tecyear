import eel
class system:
    eel.init('gui')
    def __init__(self):
        super().__init__()

    @eel.expose()
    def classs():
        pass

eel.start('/pages/main/index.html')