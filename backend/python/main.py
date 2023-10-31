import os

from singleton.logger import get_logger

logger = get_logger()

if __name__ == "__main__":
    logger.info("Hello from main.py")
    logger.info(f"__name__ is {__name__}")
    logger.info(f"__file__ is {__file__}")
    
    #log the current working directory
    logger.info(f"cwd is {os.getcwd()}")
    
    #copy over the logs.txt file ../../src/data/cockpit/logs.txt
    os.system("cp backend/python/logs.txt src/data/cockpit/logs.txt")
    