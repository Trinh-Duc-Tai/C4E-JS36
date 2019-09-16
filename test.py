class Counter:
    def _init_(self,count=0):
        self.count = count
    def tick(self):
        return self.count + 1
    def reset(self):
        self.count = 0
        return self.count
