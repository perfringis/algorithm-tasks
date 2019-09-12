def get_size(w,h,d):
    return [2*(h*w)+2*(h*d)+2*(w*d), w*h*d]

print(get_size(4,2,6))