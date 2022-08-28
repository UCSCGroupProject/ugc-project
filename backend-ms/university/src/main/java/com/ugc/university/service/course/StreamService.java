package com.ugc.university.service.course;

import com.ugc.university.model.course.Stream;
import com.ugc.university.repository.course.StreamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StreamService {
    @Autowired
    StreamRepository streamRepository;

    public void initStreams() {
        streamRepository.save(new Stream("Arts"));
        streamRepository.save(new Stream("Commerce"));;
        streamRepository.save(new Stream("Biological Science"));
        streamRepository.save(new Stream("Physical Science"));
        streamRepository.save(new Stream("Engineering Technology"));
        streamRepository.save(new Stream("Biosystems Technology"));;
        streamRepository.save(new Stream("Other"));
    }
}
