import os

#make a location class that will contain the pah from where the class is called
# make it a singleton

import os

class Singleton(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]

class Location(metaclass=Singleton):
    def __init__(self):
        self.path = os.path.dirname(os.path.realpath(__file__))

    def get_path(self):
        return self.path

    def get_parent_path(self):
        return os.path.dirname(self.path)