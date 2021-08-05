package com.programming.techie.youtubeclone.dto;

import com.programming.techie.youtubeclone.model.VideoStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VideoDto {
    private String videoId;
    @NotBlank
    private String videoName;
    @NotBlank
    private String description;
    @Size(min = 1)
    private Set<String> tags;
    private VideoStatus videoStatus;
    @NotBlank
    private String url;
    @NotBlank
    private String thumbnailUrl;
}
