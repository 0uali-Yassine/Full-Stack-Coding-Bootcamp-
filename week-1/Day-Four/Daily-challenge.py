# challenge 4

class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items or []
        self.pageSize = int(pageSize)
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize)
        self.currentPage = 1

    def getVisibleItems(self):
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self

    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        self.currentPage = max(1, min(self.totalPages, int(pageNum)))
        return self


# Example usage
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  # ["a", "b", "c", "d"]
p.nextPage()
print(p.getVisibleItems())  # ["e", "f", "g", "h"]
p.lastPage()
print(p.getVisibleItems())  # ["y", "z"]