export const truncate = (txt: string, limit: number) => {
  if (txt.length > limit) {
    limit--;
    let last = txt.substr(limit - 1, 1);
    while (last != ' ' && limit > 0) {
      limit--;
      last = txt.substr(limit - 1, 1);
    }
    last = txt.substr(limit - 2, 1);
    if (last == ',' || last == ';' || last == ':') {
      txt = txt.substr(0, limit - 2) + '...';
    } else if (last == '.' || last == '?' || last == '!') {
      txt = txt.substr(0, limit - 1);
    } else {
      txt = txt.substr(0, limit - 1) + '...';
    }
  }
  return txt.replace(/(<([^>]+)>)/gi, '');
};
