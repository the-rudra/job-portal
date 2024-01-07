from ..jobs import Enum, BaseModel, JobType, JobResponse, Country
from typing import List, Optional, Any


# for i in ["linkedin", "indeed", "zip_recruiter", "glassdoor"]:
#     exec(f"from .{i} import {i.capitalize()}Scraper")

# for i in range(1, 5):
#     exec(f"from .linkedin import LinkedInScraper{i}")

class Site(Enum):
    LINKEDIN = "linkedin"
    INDEED = "indeed"
    ZIP_RECRUITER = "zip_recruiter"
    GLASSDOOR = "glassdoor"


class ScraperInput(BaseModel):
    site_type: List[Site]
    search_term: str

    location: str = None
    country: Optional[Country] = Country.USA
    distance: Optional[int] = None
    is_remote: bool = False
    job_type: Optional[JobType] = None
    easy_apply: bool = None  # linkedin
    offset: int = 0

    results_wanted: int = 15


class Scraper:
    def __init__(self, site: Site, proxy: Optional[List[str]] = None):
        self.site = site
        self.proxy = (lambda p: {"http": p, "https": p} if p else None)(proxy)

    def scrape(self, scraper_input: ScraperInput) -> JobResponse:
        ...
