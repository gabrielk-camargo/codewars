def hero(bullets, dragons):
    bullets_needed = dragons * 2
    if bullets >= bullets_needed:
        return True
    else:
        return False